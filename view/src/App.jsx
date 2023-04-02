import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './App.css';
import './styles/helloStyle.scss';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/courses')
      .then(res => {
        setCourses(res.data.msg);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="world">Hello world</h1>
      <QrReader
        constraints={{ facingMode: 'environment' }}
        scanDelay={300}
        containerStyle={{
          width: '100%',
          backgroundColor: 'black',
          paddingTop: '0em',
          height: '30em',
        }}
        videoContainerStyle={{
          paddingTop: '0em',
          height: '100%',
          opacity: '0.5',
        }}
        videoStyle={{
          minHeight: '100%',
        }}
        onResult={(res, err) => {
          if (res) {
            console.log(res.getText());
          }
        }}
      />
      {courses.map(course => (
        <div key={course.courseId}>
          <h1>{course.courseName}</h1>
          <p>{course.courseCode}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
