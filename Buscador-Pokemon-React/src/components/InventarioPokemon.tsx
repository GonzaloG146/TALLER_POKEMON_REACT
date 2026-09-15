import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemon } from '../context/PokemonContext' ;

export const RegistroUsuario: React.FC = () => {

    const { entrenadores, entrenadorActivo, registrarEntrenador, seleccionarEntrenador } = usePokemon();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tipoDoc, setTipoDoc] = useState('CC');
    const [dni, setDni] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [politica_datos, setPolitica_datos] = useState('');

    const eventoSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!datosPersonales) {
            alert('Aceptar politica de privacidad');
            return;
        }

        const nuevo: Usuario = {
            id: Date.now(),
            nombreCompleto: `${nombre} ${apellido}`,
            documento : {tipo: tipoDoc, numero: dni},
            fechaNacimiento,
            correo,
            datosPersonales,
            fechaRegistro: new Date().toLocaleDateString()
        };

        registrarEntrenador(nuevo);
        navigate('/pokemon');
    };

return(
<div>
    <header> 
        <h2> Registro de Entrenadores</h2>
    </header>

    
    <div> 
        <form onSubmit={eventoSubmit}>

            <div>
                <label htmlFor ="nombre" >Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nombre" required placeholder="Ej: Camilo"/><br></br>
            </div>
        
            <div>
                <label for="apellido">Apellido:</label><br></br>
                <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} name="apellido" required placeholder="Ej: Perez"/><br></br>
            </div>
        
        
            <div>
                <label for="tipo_identificacion">Tipo de Identificación:</label><br></br>
                <select id="tipoDoc" value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)} name="tipoDoc" required>
                    <option value="" selected disabled>Seleccione el tipo de documento...</option>
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="PA">Pasaporte (PA)</option>
                </select><br></br>
            </div>
        
            <div>
                <label for="numero_identificacion">Número de Identificación:</label><br></br>
                    <input
                        type="text"
                        value={numero_identificacion} onChange={(e) => setNumero_identificacion(e.target.value)}
                        id="numero_identificacion"
                        name="numero_identificacion"
                        placeholder="Ej: 123456789"
                        maxlength="12"
                        pattern="[0-9]+"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                        required/> <br></br>
                    
            </div>
       
            <div>
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label><br></br>
                <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} name="fecha_nacimiento" required/><br></br>
            </div>
        
            <div>
                <label for="celular">Número de Celular:</label><br></br>
                <input
                    type="tel"
                    id="celular"
                    name="celular"
                    placeholder="Ej: 3004177843"
                    maxlength="10"
                    pattern="[0-9]{10}"
                    inputmode="numeric"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                    required/><br></br>
            </div>
        
            <div>
                <label for="correo">Correo Electrónico:</label><br></br>
                <input
                value={correo} onChange={(e) => setCorreo(e.target.value)}
                type="email"
                id="correo"
                name="correo"
                placeholder="micorreo@gmail.com"
                required/><br></br>
            </div>
        
            <div>
                <label for="pais">País de domicilio:</label><br></br>
       
        
                <select id="pais" type="text" value={pais} onChange={(e) => setPais(e.target.value)} required>
                    <option value="" disabled >Seleccione el pais...</option>
                    <option value="169">Colombia </option>
                    <option value="023">Alemania </option>
                    <option value="105">Brasil   </option>
                </select>
                <br></br> 
            </div>
            <div>
                <label for="ciudad">Ciudad de domicilio:</label><br></br>
                    <select type="text" id ="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
                    <optgroup label ="Colombia">
                    <option value="1101">Bogota D.C</option>
                    <option value="54001"> Cucuta</option>
                    <option value="66001"> Pereira</option>
                    <option value="76001"> Cali</option>
                    <option value="13001"> Cartagena</option>
                </optgroup>

            <optgroup label ="Alemania">
                <option value="030">Berlin</option>
                <option value="040">Hamburgo</option>
                <option value="089">Munich</option>
                <option value="0221">Colonia</option>
                <option value="069">Francfort del meno</option>
            </optgroup>

            <optgroup label="Brasil">
                <option value="21">Rio de janeiro</option>
                <option value="61">Brasilia</option>
                <option value="71">Salvador de la Bahia</option>
                <option value="85">Fortaleza</option>
                <option value="31"> Belo Horizonte</option>
            </optgroup>

            </select>
            </div>
            <div>
                <input type="checkbox" id="politica_datos" checked={politica_datos} onChange={(e) => setPolitica_datos(e.target.checked)} name="politica_datos" required/>
                <label for="politica_datos">
                Acepto la política de tratamiento de datos.
                </label><br></br>
            </div>
       
            <div>
                <button type="submit" class="btn-submit">Enviar 
                </button>
            </div>
        
        </form>
    </div>
</div>
)
}