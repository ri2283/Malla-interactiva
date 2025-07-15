body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.semester {
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 20px;
}

.course {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background-color: pink;
  cursor: pointer;
  border-radius: 5px;
}

.course.approved {
  background-color: purple;
  color: white;
  text-decoration: line-through;
}

.course.locked {
  background-color: grey;
  color: #333;
  cursor: not-allowed;
}

