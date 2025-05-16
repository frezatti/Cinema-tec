import NavBar from "../components/navbar";

export default function Theater() {
	return (
		<>
			<NavBar />

			<div class="container mt-4">
				<header class="d-flex justify-content-between align-items-center my-4">
					<h2>Salas</h2>
					<button id="btnNovo" class="btn btn-primary" type="button">
						<i class="bi bi-plus-circle" /> Nova Sala
					</button>
				</header>
				<div class="d-flex justify-content-between align-items-center mb-3">
					<div class="input-group w-50">
						<input
							type="text"
							class="form-control"
							placeholder="Digite o nome da sala"
							aria-label="Buscar sala"
						/>
						<button class="btn btn-primary" type="button">
							Buscar
						</button>
					</div>
				</div>

				<table class="table table-striped table-hover">
					<thead class="table-dark">
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Capacidade</th>
							<th>Tipo</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody id="tabelaSalas" />
				</table>
			</div>

			<div
				class="modal fade"
				id="idModalSala"
				tabindex="-1"
				aria-labelledby="idModalSalaTitulo"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<form id="formSala" class="modal-content" novalidate>
						<div class="modal-header">
							<h5 class="modal-title" id="idModalSalaTitulo">
								Cadastrar Nova Sala
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Fechar"
							/>
						</div>
						<div class="modal-body">
							<div class="mb-3">
								<label for="nome" class="form-label">
									Nome
								</label>
								<input
									type="text"
									class="form-control"
									id="nome"
									required
									minlength="2"
									maxlength="50"
								/>
								<div class="invalid-feedback">Informe um nome válido.</div>
							</div>
							<div class="mb-3">
								<label for="capacidade" class="form-label">
									Capacidade
								</label>
								<input
									type="number"
									class="form-control"
									id="capacidade"
									required
									min="1"
									max="500"
								/>
								<div class="invalid-feedback">
									Informe uma capacidade válida.
								</div>
							</div>
							<div class="mb-3">
								<label for="tipo" class="form-label">
									Tipo
								</label>
								<select class="form-select" id="tipo" required>
									<option value="">Selecione o tipo</option>
									<option value="2D">2D</option>
									<option value="3D">3D</option>
									<option value="IMAX">IMAX</option>
								</select>
								<div class="invalid-feedback">Selecione um tipo.</div>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
								id="btnFecharModal"
							>
								Cancelar
							</button>
							<button type="button" class="btn btn-primary" id="btnSalvarSala">
								Salvar
							</button>
						</div>
					</form>
				</div>
			</div>

			<div
				class="modal fade"
				id="modalExcluirSala"
				tabindex="-1"
				aria-labelledby="modalExcluirSalaLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="modalExcluirSalaLabel">
								Excluir Sala
							</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Fechar"
							/>
						</div>
						<div class="modal-body">
							<h5>Deseja realmente excluir a sala?</h5>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cancelar
							</button>
							<button type="button" class="btn btn-danger" id="btnExcluirSala">
								Excluir
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
