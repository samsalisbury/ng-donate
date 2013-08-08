require 'sinatra'

get '/' do
	haml :donate, :format => :html5
end