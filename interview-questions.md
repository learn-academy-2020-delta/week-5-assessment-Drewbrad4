# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Rails seperates into three sections, the model, the view, and the controller. The model represents the database, the view represents what the user sees, and the controller determines how those two things interact. 

  Researched answer: MVC mostly relates to the UI layer. The model contains only the pure data, no logic. The view shows the model's data to the user. The controller lies between the two. It listens for events in the view and responds with the appropriate data from the model, usually a method. 



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: When an application has CRUD, it means it has full persistent storage. It stands for Create, Read, Update, and Delete.

  Researched answer: CRUD are the basic functions that an application with a database must have before its considered complete. Almost every programming language out there has some form of CRUD. 



3. What is a migration? Why would you use one?

  Your answer: A migration is a file you can add to a database to modify it. You use them to add, remove, or edit information in your database.

  Researched answer: Migrations are files used to manage the state of a database. You should never directly interact with your schema, you use migration files to modify it. 



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: Multiple People might belong to a Computer as users. In that case the Computer holds the foreign key which would be a personal id for each person. A Person might have multiple Computers. The Person would have the foreign key there with a unique id for each computer. 

  Researched answer: I believe you could argue that both Computer and Person would have an association more like have_many_and_belongs_to_many. 



5. What is object-relational mapping?

  Your answer: Object-relational mapping refers to a system developed for translating OOP languages into SQL in the form of Active Records.

  Researched answer: ORM is also a technique for converting data between incompatible systems. 



6. What is a gem?

  Your answer: A gem is a bit of prepackaged code that can be easily downloaded. It allows people to downlaod and use other developers funcitonality. 

  Researched answer: A gem is an open-source library that can be used as a dependency in your program. 



7. Why is it important to have validations in your application?

  Your answer: Without validation, there is nothing to stop the user from entering data into your database that you don't want in some way, shape, or form.

  Researched answer: Validations can't be bypassed by end users and they are easy to implement, test, and maintain. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - Representational State Transfer. The routes you put in the route.rb file to create the file path for your models. 
- JSON - JavaScript Object Notation. A syntax for storing and exchanging data in the form of key-value pairs. 
- API - A computing interface that defines how softwares communicate with one another. 
- Endpoints - The point at which the API connects with the software. They specify where API's can use information and make sure everyhting works together. 
- Strong params - A feature in Rails that prevents assigning request parameters unless they have been expressly permitted. 
