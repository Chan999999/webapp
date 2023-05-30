from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from api import user, post

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["JWT_SECRET_KEY"] = "jwtsecret"
jwt = JWTManager(app)

api = Api(app)

api.add_resource(user.User, "/api/users")
api.add_resource(user.User, "/api/users/<int:userId>", endpoint="get-user")
api.add_resource(user.User.SignIn, "/api/users/signIn")
api.add_resource(user.User.Me, "/api/users/me")
api.add_resource(post.Post, "/api/posts")
api.add_resource(post.Post, "/api/posts/<int:postId>", endpoint="get-post")

if __name__ == "__main__":
    app.run()

