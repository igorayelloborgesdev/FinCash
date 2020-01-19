import axios from "axios";
var md5 = require("md5");

let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});
export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export function postModalCall() {
  console.log("POST_SUCCESS");
  return {
    type: "POST_SUCCESS",
    obj: {}
  };
}

export function postlogin(param1, param2) {
  fetchContaCorrente();
  fetchLogin(param1, md5(param2));
  return {
    type: "LOG_SUCCESS",
    obj: {}
  };
}

async function fetchContaCorrente() {
  const response = await axios
    .get("http://192.168.99.100:5001/ContaCorrente", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {      
      localStorage.setItem("ContaCorrente", JSON.stringify(response.data));
      console.log(response.data);
      fetchContaDespesa();
    });
}

async function fetchContaDespesa() {
  const response = await axios
    .get("http://192.168.99.100:5001/ContaDespesa", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      localStorage.setItem("ContaDespesa", JSON.stringify(response.data));
      console.log(response.data);
      fetchEmpresa();
    });
}

async function fetchEmpresa() {
  const response = await axios
    .get("http://192.168.99.100:5002/empresa", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      localStorage.setItem("Empresa", JSON.stringify(response.data));
      console.log(response.data);
      fetchFilial();
    });
}

async function fetchFilial() {
  const response = await axios
    .get("http://192.168.99.100:5002/filial", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      localStorage.setItem("Filial", JSON.stringify(response.data));
      console.log(response.data);
      fetchFornecedor();
    });
}

async function fetchFornecedor() {
  const response = await axios
    .get("http://192.168.99.100:5003/", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      localStorage.setItem("Fornecedor", JSON.stringify(response.data));
      console.log(response.data);
      fetchOperacao();
    });
}

async function fetchOperacao() {
  const response = await axios
    .get("http://192.168.99.100:5004/", {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      localStorage.setItem("Operacao", JSON.stringify(response.data));
      console.log(response.data);
    });
}

async function fetchLogin(aUser, aPass) {  
  try
  {
    const response =
    await axios.post('http://192.168.99.100:5005/login',
      { user: aUser, pass: aPass },
      { headers: {'Content-Type': 'application/json'}}
    ).then(function(response){
      if(response.data.code != 406)
      {
        localStorage.setItem('user', JSON.stringify(response.data));        
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
      else
      {
        console.log("ERRO");
      }
    });
  }
  catch(e)
  {
    console.log(e);
  }
}
