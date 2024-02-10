export const publish=(e)=>{
  e.stopPropagation();
  const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/publish`;
  const token = localStorage.getItem('token');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body:JSON.stringify({
      content:children._id,
      platforms:['facebook','linkedin'],
    })
  };
  const fetchData = async () => {
    const promise = await fetch(url, requestOptions);
    if (promise.status == 200) {
      const response = await promise.json();
      console.log(response);
    }
    else {
      alert(promise.statusText);
    }
  }
  fetchData();
}