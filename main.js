var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/bro.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/grandpa.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Sam", "John", "Debjit Sarkar", "Rohan", "Rohit"];
var i = 0;

function update()
{
    var numbers_of_family_member_in_array = 5;
    i++;

    if(i > numbers_of_family_member_in_array){
        i = 0;
    }

    var updatedImage = images[i];
    var updatedName = names[i] ;

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
