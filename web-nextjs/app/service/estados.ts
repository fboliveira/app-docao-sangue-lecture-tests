export const getAllEstados = async () => {

    const estados = await fetch('http://localhost:5000/estados')
    return estados.json();

}