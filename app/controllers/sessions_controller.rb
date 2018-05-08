class SessionsController < ApplicationController

  def new
  end

  def create
    admin = Admin.find_by(email: params[:session][:email].downcase)
    if admin && admin.authenticate(params[:session][:password])
      log_in admin
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

end
