from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS
from math import ceil

app = Flask(__name__)
CORS(app)

# configuracion de la conexion a MongoDB
app.config["MONGO_URI"] = "mongodb://localhost:27017/Proyecto-Biblioteca"
mongo = PyMongo(app)

# Colecciones
users = mongo.db.users
books = mongo.db.books


# Ruta para agregar un usuario
@app.route('/users', methods=['POST'])
def add_usuario():
    email = request.json['email']
    name = request.json['name']
    password = request.json['password']
    role = request.json.get('role', 'user')  # Valor por defecto 'user' si no se proporciona

    usuario_id = users.insert_one({
        'email': email,
        'name': name,
        'password': password,
        'role': role
    }).inserted_id

    return jsonify(str(ObjectId(usuario_id))), 201

# Ruta para obtener todos los usuarios
@app.route('/users', methods=['GET'])
def get_usuarios():
    all_users = users.find()
    output = []
    for user in all_users:
        output.append({
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'password': user['password'],
            'role': user['role']
        })
    return jsonify(output)

# Ruta para eliminar un usuario por su ID
@app.route('/users/<id>', methods=['DELETE'])
def delete_usuario(id):
    users.delete_one({'_id': ObjectId(id)})
    return jsonify({'result': 'Usuario eliminado'}), 200

# Ruta para iniciar sesión
@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

# Buscar el usuario por email
    user = users.find_one({'email': email})

    # Verificar la contraseña
    if user and user['password'] == password:
        return jsonify({'result': 'Login successful', 'user_id': str(user['_id'])}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401
    
    
    # nueva ruta para obtener libros con paginación
@app.route('/books', methods=['GET'])
def get_books():
    page = int(request.args.get('page', 1))
    books_per_page = 50
    total_books = books.count_documents({})
    total_pages = ceil(total_books / books_per_page)
    paginated_books = books.find().skip((page - 1) * books_per_page).limit(books_per_page)

    # convertir cada ObjectId a string
    books_list = []
    for book in paginated_books:
        book['id'] = str(book['_id'])  # convertir ObjectId a string
        del book['_id']  # eliminar el viejo 'id' para evitar confusiones
        books_list.append(book)

    response = {
        'total_pages': total_pages,  # Corregido de 'totalpages' a 'total_pages'
        'current_page': page,
        'books': books_list
    }
    return jsonify(response)

#cambio de estado
@app.route('/books/<id>', methods=['PATCH'])
def update_book_availability(id):
    print(f"ID recibido: {id}")  # Agregar log para depurar el id recibido
    try:
        book_id = ObjectId(id)
    except:
        return jsonify({'error': 'ID inválido'}), 400

    new_availability = request.json.get('disponible')
    if not isinstance(new_availability, bool):
        return jsonify({'error': 'Disponibilidad no proporcionada o no es un booleano'}), 400

    update_result = books.update_one(
        {'_id': book_id},
        {'$set': {'disponible': new_availability}}
    )

    if update_result.modified_count == 0:
        return jsonify({'error': 'No se pudo actualizar el libro o el libro no fue encontrado'}), 404

    return jsonify({'result': 'Libro actualizado correctamente'}), 200

#cambio de visulizacion
@app.route('/user-books/<id>', methods=['PATCH'])
def update_user_book_estado(id):
    print(f"ID recibido: {id}")  # agregar log para depurar el ID recibido
    try:
        user_book_id = ObjectId(id)
    except Exception as e:
        return jsonify({'error': f'ID inválido: {str(e)}'}), 400

    new_estado = request.json.get('estado')
    if not isinstance(new_estado, bool):
        return jsonify({'error': 'El estado proporcionado no es un booleano'}), 400

    update_result = mongo.db['user-books'].update_one(
        {'_id': user_book_id},
        {'$set': {'estado': new_estado}}
    )

    if update_result.modified_count == 0:
        return jsonify({'error': 'No se pudo actualizar el registro o el registro no fue encontrado'}), 404

    return jsonify({'result': 'Estado del registro actualizado correctamente'}), 200





#agregar libros
@app.route('/user-books', methods=['POST'])
def add_user_book():
    user_id = request.json['user_id']
    book_id = request.json['book_id']
    estado = request.json.get('estado', False)  # valor por defecto es False

    try:
        user_book_id = mongo.db['user-books'].insert_one({
            'userId': ObjectId(user_id),
            'bookId': ObjectId(book_id),
            'estado': estado  # incluye el campo estado
        }).inserted_id

        return jsonify({'result': 'Book added to user library', 'user_book_id': str(user_book_id)}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

#crea metodo
@app.route('/user-books/<user_id>', methods=['GET'])
def get_user_books(user_id):
    try:
        print(f"Recibiendo libros para el usuario con ID: {user_id}")
        page = int(request.args.get('page', 1))
        books_per_page = 50  # Ajusta esto según tus necesidades

        total_books = mongo.db['user-books'].count_documents({'userId': ObjectId(user_id)})
        total_pages = ceil(total_books / books_per_page)

        user_books = mongo.db['user-books'].aggregate([
            {
                '$match': {
                    'userId': ObjectId(user_id)
                }
            },
            {
                '$lookup': {
                    'from': 'books',
                    'localField': 'bookId',
                    'foreignField': '_id',
                    'as': 'bookDetails'
                }
            },
            {
                '$unwind': '$bookDetails'
            },
            {
                '$project': {
                    '_id': 1,
                    'bookTitle': '$bookDetails.Titulo',
                    'bookAuthor': '$bookDetails.Autor(es)',
                    'bookPublisher': '$bookDetails.Editorial',
                    'bookYear': '$bookDetails.Fecha de publicación',
                    'bookIsbn': '$bookDetails.ISBN',
                    'bookNumPage': '$bookDetails.Número de páginas',
                    'bookGenre': '$bookDetails.Genero',
                    'bookLanguage': '$bookDetails.Idioma',
                    'userBookId': '$bookDetails._id',
                    'estado': '$estado'
                }
            },
            {
                '$skip': (page - 1) * books_per_page
            },
            {
                '$limit': books_per_page
            }
        ])

        books_list = list(user_books)
        for book in books_list:
            book['_id'] = str(book['_id'])
            book['userBookId'] = str(book['userBookId'])

        response = {
            'total_pages': total_pages,
            'current_page': page,
            'books': books_list
        }

        print(f"Libros obtenidos: {books_list}")
        return jsonify(response), 200

    except Exception as e:
        print(f"Error al obtener libros del usuario: {e}")
        return jsonify({'error': str(e)}), 500



    
#delete libros
@app.route('/user-books/<id>', methods=['DELETE'])
def remove_user_book(id):
    try:
        delete_result = mongo.db['user-books'].delete_one({
            '_id': ObjectId(id)
        })

        if delete_result.deleted_count == 1:
            return jsonify({'result': 'Book removed from user library'}), 200
        else:
            return jsonify({'error': 'Book not found in user library'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
