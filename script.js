const users = [
  {
    name: "Aarav Singhaniya",
    pic: "https://i1-c.pinimg.com/736x/9f/dc/c2/9fdcc25f539a846e928ce342846e1652.jpg",
    bio: "I am on top of the world."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "UI designer passionate about minimalistic interfaces and art."
  },
  {
    name: "Kabir Mehta",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "Fitness lover and marathon runner who never skips leg day."
  },
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Bookworm who enjoys mystery novels and rainy afternoons."
  },
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Coffee enthusiast who spends weekends exploring hidden cafes."
  },
  {
    name: "Rohan Singh",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
    bio: "Photographer capturing everyday moments through a creative lens."
  },
  {
    name: "Sneha Kapoor",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Travel addict with a goal to visit every state in India."
  },
  {
    name: "Vivaan Malhotra",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
    bio: "Tech geek who loves building side projects and learning AI."
  },
  {
    name: "Ishita Roy",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    bio: "Food blogger always hunting for the next delicious dish."
  },
  {
    name: "Arjun Patel",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Guitar player who dreams of performing on a big stage someday."
  },
  {
    name: "Meera Nair",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
    bio: "Nature lover who enjoys hiking and watching sunsets."
  }
];


//Objectives: To show every user, filter on input, show filtered users
const users_container = document.querySelector("#users_container");

function showUsers(arr){
    arr.forEach(function(user){
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");
        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent= user.name;
        const para = document.createElement("p");
        para.textContent= user.bio;
    
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        users_container.appendChild(card);
        
    })
}

showUsers(users);
let inp = document.querySelector("#search");

inp.addEventListener("input", function(){
  let newUsers = users.filter((user)=> {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  users_container.innerHTML = "";

  if(newUsers.length > 0){
    showUsers(newUsers);
  }
  else{
    users_container.textContent = "No user found.."
  }
})