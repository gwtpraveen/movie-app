const getData = (data) => {
    let output = []
    data.forEach(item => {

        output.push(item.name.replace(/ /g, "+"))
    })
    console.log("output", output)
    return output;
}

export default getData;