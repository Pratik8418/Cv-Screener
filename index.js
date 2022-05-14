
const data = [
  {
    name : "Pavan Joshi",
    age : "25",
    city : "Surat",
    language : "C++,Java",
    framework : "React",
    image : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    experience : '2'
  },

  {
    name : "Shahil Patel",
    age : "23",
    city : "Vadodra",
    language : "HTML,CSS,JAVA-SCRIPT",
    framework : "React",
    image : "https://randomuser.me/api/portraits/thumb/men/24.jpg",
    experience : '2'
  },

  {
    name : "Tarika Shah",
    age : "23",
    city : "Ahmedabad",
    language : "C++,Java,HTML5,CSS3,JS",
    framework : "Angular",
    image : "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    experience : '1'
  },

  {
    name : "Man Patel",
    age : "24",
    city : "Surat",
    language : "C++,Java",
    framework : "React",
    image : "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    experience : '3'
  },

  {
    name : "Priya Patel",
    age : "26",
    city : "Patan",
    language : "Python,R,Java",
    framework : "Angular",
    image : "https://randomuser.me/api/portraits/thumb/women/82.jpg",
    experience : '4'
  },

  {
    name : "Hardik Modi",
    age : "30",
    city : "Bengluru",
    language : "Python,C#,C++,R,Java",
    framework : "Angular",
    image : "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    experience : '8'
  },

  {
    name : "Dipti Sharma",
    age : "33",
    city : "Panjab",
    language : "Java,JS,Node js",
    framework : "React",
    image : "https://randomuser.me/api/portraits/thumb/women/48.jpg",
    experience : '10'
  },

  {
    name : "Nilam Vyas",
    age : "23",
    city : "Mumbai",
    language : "R,GO",
    framework : "Angular",
    image : "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    experience : '1'
  },

  {
    name : "Soham Patel",
    age : "29",
    city : "Delhi",
    language : "Python,HTML,CSS,JS,R,Java",
    framework : "React",
    image : "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    experience : '6'
  },


]

const candidates = CvIterator(data);
nextCv();

//cv iterator
function CvIterator(profiles) {
  let nextIndex = 0;
  return{
    next : function () {
      return nextIndex < profiles.length ?
      {value : profiles[nextIndex++] , done:false} :
      {done : true }
    }
  }
}

const next = document.getElementById('next');
next.addEventListener('click',nextCv);


function nextCv() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');

  if (currentCandidate != undefined) {
  image.innerHTML = `<img src='${currentCandidate.image}'>`
  
  profile.innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">${currentCandidate.name}</li>
  <li class="list-group-item">${currentCandidate.age} years old</li>
  <li class="list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
  <li class="list-group-item">with ${currentCandidate.framework} framework</li>
  <li class="list-group-item">experience ${currentCandidate.experience} years </li>
</ul>
 `}
 else{
   alert("End of Candidate Applications");
   window.location.reload();
 }
}