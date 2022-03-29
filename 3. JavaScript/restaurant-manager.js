
// This class represnts a real world entity which can perform tasks.

// class contains properties and methods.
class RestaurantManager{

    restaurants = [{"name":"Punjabi Tadka", "city":"Amritsar"},
                    {"name":"BBQ Nation", "city":"Pune"}]
    
    // Task to be performed by restaurant manager.
    getRestaurantsByCity(city){
        console.log(this.restaurants.find(r=>r.city==city));
    }
}

// instance of RestaurantManager
const manager = new RestaurantManager();
manager.getRestaurantsByCity("Pune");

// class Student{
//     name, id;

//     attendSession(){

//     }

//     completeAssignment(){

//     }
// }

// const student = new Student("Satish")
// student.attendSession();