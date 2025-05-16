import NavBar from "../components/navbar";

export default function Filmes() {
	return (
		<>
			<NavBar />
			<main class="container">
				<header class="d-flex justify-content-between align-items-center my-4">
					<h2>Filmes</h2>
					<button id="btnNovo" class="btn btn-primary">
						<i class="bi bi-plus-circle" /> Novo Filme
					</button>
				</header>

				<div class="row mb-4">
					<div class="col-md-8">
						<div class="input-group">
							<input
								type="text"
								class="form-control"
								placeholder="Digite o título do filme"
								aria-label="Buscar filme"
							/>
							<button class="btn btn-primary" type="button">
								<i class="bi bi-search" /> Buscar
							</button>
						</div>
					</div>
				</div>

				<div class="table-responsive">
					<table class="table table-striped table-hover">
						<thead class="table-dark">
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Título</th>
								<th scope="col">Gênero</th>
								<th scope="col">Classificação</th>
								<th scope="col">Duração</th>
								<th scope="col">Estreia</th>
								<th scope="col">Ações</th>
							</tr>
						</thead>
						<tbody id="tabelaFilmes"></tbody>
					</table>
				</div>

				<div
					class="modal fade"
					id="idModalFilme"
					tabindex="-1"
					aria-labelledby="idModalFilmeTitulo"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="idModalFilmeTitulo">
									Cadastrar Novo Filme
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Fechar"
									id="btnFecharModal"
								/>
							</div>
							<div class="modal-body">
								<form id="formFilme">
									<div class="mb-3">
										<label for="imagem" class="form-label">
											Imagem do Filme
										</label>
										<input
											type="file"
											accept="image/*"
											class="form-control"
											id="imagem"
										/>
									</div>
									<div class="mb-3">
										<label for="titulo" class="form-label">
											Título
										</label>
										<input
											type="text"
											class="form-control"
											id="titulo"
											required
										/>
									</div>
									<div class="mb-3">
										<label for="descricao" class="form-label">
											Descrição
										</label>
										<textarea class="form-control" id="descricao" rows="3" />
									</div>
									<div class="mb-3">
										<label for="genero" class="form-label">
											Gênero
										</label>
										<select class="form-select" id="genero" required>
											<option value="">Selecione um gênero</option>
											<option value="Ação">Ação</option>
											<option value="Aventura">Aventura</option>
											<option value="Comédia">Comédia</option>
											<option value="Drama">Drama</option>
											<option value="Ficção Científica">
												Ficção Científica
											</option>
											<option value="Romance">Romance</option>
											<option value="Terror">Terror</option>
											<option value="Suspense">Suspense</option>
											<option value="Animação">Animação</option>
											<option value="Documentário">Documentário</option>
										</select>
									</div>
									<div class="mb-3">
										<label for="classificacao" class="form-label">
											Classificação Indicativa
										</label>
										<select class="form-select" id="classificacao" required>
											<option value="">Selecione Link classificação</option>
											<option value="L">Livre</option>
											<option value="10">10 anos</option>
											<option value="12">12 anos</option>
											<option value="14">14 anos</option>
											<option value="16">16 anos</option>
											<option value="18">18 anos</option>
										</select>
									</div>
									<div class="mb-3">
										<label for="duracao" class="form-label">
											Duração (minutos)
										</label>
										<input
											type="number"
											class="form-control"
											id="duracao"
											min="1"
											required
										/>
									</div>
									<div class="mb-3">
										<label for="dataEstreia" class="form-label">
											Data de Estreia
										</label>
										<input
											type="date"
											class="form-control"
											id="dataEstreia"
											required
										/>
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
									id="btnSalvarFilme"
								>
									Salvar
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					class="modal fade"
					id="modalExcluirFilme"
					tabindex="-1"
					aria-labelledby="modalExcluirFilmeLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="modalExcluirFilmeLabel">
									Confirmar Exclusão
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Fechar"
								/>
							</div>
							<div class="modal-body">
								<h5>Deseja realmente excluir este filme?</h5>
								<p class="text-danger">Esta ação não pode ser desfeita.</p>
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
									class="btn btn-danger"
									id="btnExcluirFilme"
								>
									Excluir
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
