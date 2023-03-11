import { child, getDatabase, onValue, push, ref, set, update } from 'firebase/database';
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/AuthContext';
const XLSX = require('xlsx');

const UploadData = () => {

    const [jsonData, setJsonData] = useState([])

    const {user} = useContext(UserContext)

    console.log(user.email?.split('@')[0])

    const uploadData = () => {
        const db = getDatabase()
        // set(ref(db, 'org/'+user.email.split('@')[0]), {
        //   data:jsonData
        // })

        jsonData.map((item) => {

          const postData = item;
      
          // Get a key for a new Post.
          // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;
        
          // Write the new post's data simultaneously in the posts list and the user's post list.
          const updates = {};
          updates['org/'+ user.email?.split('@')[0] + "/users/" + postData.Username] = postData;
        
          update(ref(db), updates);
        })
    }

    
  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "user/");
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
    console.log(data)
  });
  }

    const readAFile = (file) => {

        const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)
        fileReader.onload = e => {
          const bufferArray = e.target.result
          const wb = XLSX.read(bufferArray, { type: 'buffer' })
          const wsname = wb.SheetNames[0]
          const ws = wb.Sheets[wsname]
          const data = XLSX.utils.sheet_to_json(ws)
          resolve(data)
        }
        fileReader.onerror = error => {
            reject(error)
          }
        })

        promise.then(d => {
            setJsonData(d)
          })
    }

    return (
        <div>
            <h1>hello</h1>
            <input type='file' onChange={(e) => {const file = e.target.files[0];readAFile(file)}} />
            <button onClick={uploadData}>Upload</button>
        </div>
    )
}

export default UploadData