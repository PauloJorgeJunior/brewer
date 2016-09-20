package com.algaworks.brewer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.algaworks.brewer.model.Cliente;
import com.algaworks.brewer.model.TipoPessoa;

@Controller
@RequestMapping("/clientes")
public class ClientesController {

	@RequestMapping("/novo")
	public ModelAndView novo(Cliente cliente) {
		ModelAndView mv = new ModelAndView("cliente/CadastroCliente");
		mv.addObject("tiposPessoa", TipoPessoa.values());
		return mv;
	}

	/*@RequestMapping(value = "/clientes/novo", method = RequestMethod.POST)
	public String cadastrar(@Valid Cliente cliente, BindingResult result, Model model, RedirectAttributes attributes) {
		if (result.hasErrors()) {
			return novo(cliente);
		}

		// Salvar no banco de dados...
		attributes.addFlashAttribute("mensagem", "Cliente salvo com sucesso!");
		return "redirect:/cliente/novo";
	}*/
}
