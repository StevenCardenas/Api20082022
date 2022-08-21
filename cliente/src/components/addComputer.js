import React, { useState } from 'react'
import axios from 'axios'
const url="http://localhost:3002/cpustore/computer"
//Construimos el componente
function AddComputer() {
    //Hooks para hacer el put
    //Hooks para hacer el put
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [model, setModel] = useState('')
    //Función agregar usuario que va con el onclick
    //Instalamos uniqid "npm i uniqid" si queremos un id único sino nel
    //Instalamos axios "npm i axios"
    //En package.json añadimos el proxy de nuestro localhost:port/
    function addComputer() {

        var computer = {
            id: id,
            name: name,
            price: price,
            model: model
        }
        console.log(computer)

        axios.post(url, computer)
            .then(res => {
                alert(`Se ha registrado con exito a ${computer.name} ${computer.id}`);
                window.location.href = "./";

            })
            .then(err => { console.log(err) })
    }

    return (

        <div >
            <form>
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>Register Computer</h3>
                        <p >Complete all the camps</p>
                        <div class="form-group row">
                            <div class="form-group col-sm-6 flex-column d-flex">

                                <label class="form-control-label px-3">
                                    id<span class="text-danger"> *</span>
                                </label>
                                <input
                                    type="text"
                                    id="txtCedula"
                                    name="txtCedula"
                                    placeholder="ej: 4"
                                    value={id} onChange={(e) => { setId(e.target.value) }}
                                />
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label px-3">
                                    Computer Name<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    id="txtUsuario"
                                    name="txtUsuario"
                                    placeholder="Ej: jcarrera"
                                    value={name} onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label px-3">
                                    Price<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    id="txtPassword"
                                    name="txtPassword"
                                    placeholder="$ ej. 523.24"
                                    value={price} onChange={(e) => { setPrice(e.target.value) }}
                                />
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex">
                                    {" "}
                                    <label class="form-control-label px-3">
                                        Computer model
                                        <span class="text-danger"> *</span>
                                    </label>{" "}
                                    <input
                                        type="text"
                                        id="txtNombre"
                                        name="txtNombre"
                                        placeholder="Ej. Intel Core i10"
                                        value={model} onChange={(e) => { setModel(e.target.value) }}
                                    />{" "}
                                </div>
                        </div>
                        
                        <div class="row justify-content-between text-left">
                        </div>
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6">
                                {" "}
                                <br />
                                <button
                                    onClick={addComputer}
                                    type="submit"
                                    class="btn btn-lg btn-primary"
                                >
                                    Register computer
                                </button>
                                <br /> <br /> <br />
                            </div>
                        </div>


                    </div>
                </div>
            </form>
        </div>

    )
}
export default AddComputer