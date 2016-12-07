Brewer = Brewer || {};

Brewer.PesquisaRapidaCliente = (function() {
	
	function PesquisaRapidaCliente() {
		this.pesquisaRapidaClientesModal = $('#pesquisaRapidaClientes');
		this.nomeInput = $('#nomeClienteModal');
		this.pesquisaRapidaBtn = $('.js-pesquisa-rapida-clientes-btn'); 
		this.containerTabelaPesquisa = $('#containerTabelaPesquisaRapidaClientes');
		this.htmlTabelaPesquisa = $('#tabela-pesquisa-rapida-cliente').html();
		this.template = Handlebars.compile(this.htmlTabelaPesquisa);
		this.mensagemErro = $('.js-mensagem-erro');
		this.btnCloseModal1 = $('#btnCloseModal1');
		this.btnCloseModal2 = $('#btnCloseModal2');
		this.btnCloseModal3 = $('#btnCloseModal3');
	}
	
	PesquisaRapidaCliente.prototype.iniciar = function() {
		this.pesquisaRapidaBtn.on('click', onPesquisaRapidaClicado.bind(this));
		this.pesquisaRapidaClientesModal.on('shown.bs.modal', onShowPesquisaModal.bind(this));	
		this.btnCloseModal1.on('click', onCloseModal.bind(this));
		this.btnCloseModal2.on('click', onCloseModal.bind(this));
		this.btnCloseModal3.on('click', onCloseModal.bind(this));
	}
	
	function onPesquisaRapidaClicado(event) {
		event.preventDefault();
		
		$.ajax({
			url: this.pesquisaRapidaClientesModal.find('form').attr('action'),
			method: 'GET',
			contentType: 'application/json',
			data: {
				nome: this.nomeInput.val()
			}, 
			success: onPesquisaConcluida.bind(this),
			error: onErroPesquisa.bind(this)
		});
	}
	
	function onPesquisaConcluida(resultado) {
		var html = this.template(resultado);
		this.containerTabelaPesquisa.html(html);
		this.mensagemErro.addClass('hidden');
	} 
	
	function onErroPesquisa() {
		this.mensagemErro.removeClass('hidden');
		this.mensagemErro.show();
	}
	
	function onShowPesquisaModal(){
	   this.nomeInput.val('');
	   this.nomeInput.focus();
	   this.containerTabelaPesquisa.html('');
	   this.mensagemErro.hide();
	}
	
	function onCloseModal() {
	   this.mensagemErro.hide();
	}
	
	return PesquisaRapidaCliente;
	
}());

$(function() {
	var pesquisaRapidaCliente = new Brewer.PesquisaRapidaCliente();
	pesquisaRapidaCliente.iniciar();
});