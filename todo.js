var app = angular.module("todoModule", []);

app.controller("todoCtrl", todoFunction);

function todoFunction(){
      var editBoolean = false;
         this.items =[];
        //this.items = ["Jogging", "Cardio" ,"Yoga"];

        this.addTodos = function (){
            if(this.todoItem != null)
            this.items.push(this.todoItem);
            this.todoItem = null;
        }

        this.editTodos = function(){
            this.editBoolean = !this.editBoolean;
        }

        this.deleteButton = function(i){
           this.items.shift(i);
        }
    
}