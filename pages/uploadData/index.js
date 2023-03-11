import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react'
const XLSX = require('xlsx');

const UploadData = () => {

    const [jsonData, setJsonData] = useState([])

    const uploadData = () => {
        const db = getDatabase()
        set(ref(db, 'user/'), {
          data:jsonData
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