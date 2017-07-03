
	function ocultarDiscap(){
		$('#discapacity').hide();
		var erase1 = $('#otherdis').val('');
	}
	function ocultarApoyo(){
	$('#turn').hide();
	var erase2 = $('#otherAp').val('');
	}


	function discapacidad(){
		$('#discapacity').show();
	}

	function OtraDiscapacidad(){
		$('#otherdis').show();
		$('#otherdisp').show();
	}

	function Apoyo(){
		$('#turn').show();
	}

	function otroApoyo(){
		$('#otherAp').show();
		$('#otherApp').show();
	}


function confirma(){
	var codigo = document.getElementById('key').value;

	if(codigo == '')
	{
	}else{

		alert('No pongas nada');
	}
};



	$(function(){
		$('#frm-test').form({
			nombre : {
				identifier : 'nombre',
				rules : [{
					type : 'empty',
					prompt : 'Ingresa el Nombre'
				}]
			},
			apellido : {
				identifier : 'apellido',
				rules : [{
					type : 'empty',
					prompt : 'Porfavor Ingrese su Apellido'
				}

				]
			},
			telephone : {
				identifier : 'telephone',
				rules : [{
					type : 'empty',
					prompt : 'Porfavor Ingrese su Teléfono'
				}

				]
			},

			email: {
				identifier : 'email',
				rules : [{
					type : 'email',
					prompt : 'Porfavor ingresa un mail valido'
				}]
			},
			clave : {
				identifier : 'clave',
				rules : [{
					type : 'empty',
					prompt : 'Necesitas una clave de acceso'
				}]
			}


		}, {
			onSuccess: function(e){
				e.preventDefault();
				alert('Gracias!, Tú registro se completo exitosamente');
				guardarConfirmado();

			}
		});
	});