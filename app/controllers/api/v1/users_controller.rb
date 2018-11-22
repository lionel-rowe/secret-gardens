class Api::V1::UsersController < Api::V1::BaseController
    def signup
        @user = User.new(email: params[:email], password: params[:password])
        if @user.save
            render json: {"msg":"success"}
            # render json: {token: @user.token}
        else
            render json: {error: "signup failed"}
        end

    end

    def login
        @user = User.find_by(email: params[:email])
        if @user.nil?
            render json: {error: "login failed"}
        else
            if @user.valid_password?(params[:password])
                render json: {token: @user.token}
            else
                render json: {error: "login failed"}
            end
        end
    end

    private

    def user_params
    end
end
