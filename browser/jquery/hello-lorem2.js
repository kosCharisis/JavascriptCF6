$(function() {
    sayHelloLorem()
})

function sayHelloLorem() {
    $(`<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptas? Quas accusamus id quasi, exercitationem quibusdam vitae veritatis dicta temporibus, sit ad expedita mollitia accusantium illum voluptatum eos obcaecati dolorem.</div>`).appendTo($(`body`))
}