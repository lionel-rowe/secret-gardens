class Api::V1::UsersController < Api::V1::BaseController
    def signup
        @user = User.new(email: params[:email], password: params[:password])
        if @user.save
            render json: {"msg":"success"}
            # render json: {token: @user.token}
        else
            render json: {error: "We have been unable to process your request, please try again."}
        end

    end

    def login
        @user = User.find_by(email: params[:email])
        if @user.nil?
            render json: {error: "Login failed, please try again!"}
        else
            if @user.valid_password?(params[:password])
                render json: {token: @user.token}
            else
                render json: {error: "Login failed, please try again!"}
            end
        end
    end

    private

    def user_params
    end
end
