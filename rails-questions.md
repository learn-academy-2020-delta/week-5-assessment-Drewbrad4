# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

    $ rails new name_of_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - This is the 'action' portion of the request. Tells the browser what to do with the information. 

library -  This is the route to the page. Will be located in the url along with any params, to be entered manually or linked to. Can be method name.

:id - This refers to the paramaters passed in the method. Can be multiple chained by "/". 


book - This refers to the controller the method is located in. 

show - This is the method being called.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Easy! You need a new migration!
First generate a new migration file:

    $ rails generate migration file_name_here

Your file name should be directly associated with what you are doing and can be PascalCase or snake_case but you should only use one or the other. In this case: add_foreign_key_to_model or AddForeignKeytoModel

After that you navigate into the files and look for /db/migrate/LOTS_OF_RANDOM_NUMBERSadd_foreign_key_to_model
When you're there, add code into the def change method:

    add_column :table_name, :foreign_key (name of column you're adding), :integer (datatype)

After that, run:

    $ rails db:migrate

And you're done! Your Schema is updated.

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

    $ rails g model Person shirt:string pants:string shoes:string


5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

You would need to navigate to /app/model/person.rb

and within the Person class add your validation:

    validates :shirt, :pants, :shoes, presence: true


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention for Rails models is snake_case. The table will generate in PascalCase.