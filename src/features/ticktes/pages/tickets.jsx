import NavBar from "../components/navbar";

export default function Tickets() {
	return (
		<>
			<NavBar />
			<main class="container">
				<header class="d-flex justify-content-between align-items-center my-4">
					<h2>Ingressos</h2>
					<button
						type="button"
						class="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#modalVendaIngresso"
					>
						<i class="bi bi-plus-circle" /> Comprar
					</button>
				</header>
				<hr />
				<div
					class="modal fade"
					id="modalVendaIngresso"
					tabindex="-1"
					aria-labelledby="modalVendaIngressoLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="modalVendaIngressoLabel">
									Venda de Ingressos
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Fechar"
								/>
							</div>
							<div class="modal-body">
								<form id="formIngresso" novalidate>
									<div class="mb-3">
										<label for="sessao" class="form-label">
											Sessão
										</label>
										<select class="form-select" id="sessao" required>
											<option value="">Selecione uma sessão</option>
										</select>
									</div>
									<div class="mb-3">
										<label for="nomeCliente" class="form-label">
											Nome do Cliente
										</label>
										<input
											type="text"
											class="form-control"
											id="nomeCliente"
											required
											minlength="2"
										/>
									</div>
									<div class="mb-3">
										<label for="cpf" class="form-label">
											CPF
										</label>
										<input
											type="text"
											class="form-control"
											id="cpf"
											required
											pattern="\d{11}"
											placeholder="Somente números"
										/>
										<div class="form-text">
											Digite 11 dígitos numéricos sem pontos ou traços.
										</div>
									</div>
									<div class="mb-3">
										<label for="assento" class="form-label">
											Assento
										</label>
										<input
											type="text"
											class="form-control"
											id="assento"
											required
											pattern="[A-Z]\d{1,2}"
											placeholder="Ex: A10"
										/>
									</div>
									<div class="mb-3">
										<label for="tipoPagamento" class="form-label">
											Tipo de Pagamento
										</label>
										<select class="form-select" id="tipoPagamento" required>
											<option value="">Selecione o tipo de pagamento</option>
											<option value="Cartão">Cartão</option>
											<option value="Pix">Pix</option>
											<option value="Dinheiro">Dinheiro</option>
										</select>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Cancelar
								</button>
								<button
									type="button"
									class="btn btn-primary"
									id="btnConfirmarVenda"
								>
									Confirmar Venda
								</button>
							</div>
						</div>
					</div>
				</div>
				<h3>Ingressos Vendidos</h3>
				<table class="table table-striped table-hover">
					<thead class="table-dark">
						<tr>
							<th>ID</th>
							<th>Filme</th>
							<th>Sessão</th>
							<th>Cliente</th>
							<th>CPF</th>
							<th>Assento</th>
							<th>Pagamento</th>
							<th>Data da Compra</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody id="tabelaIngressos" />
				</table>
			</main>
		</>
	);
}
