import React from 'react'

export default function deleteButton({children}) {
  const deletef=(e)=>{
    e.stopPropagation();
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${children._id}`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        // setShow(false);
        console.log(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }
  return (
    <button onClick={deletef} className="btn btn-error w-32">Delete</button>
  )
}
