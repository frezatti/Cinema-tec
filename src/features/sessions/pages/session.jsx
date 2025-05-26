export default function Session() {
    return (
        <>
            <main class="container">
                <header class="d-flex justify-content-between align-items-center my-4">
                    <h2>Gerenciamento de Sessões</h2>
                    <button id="btnNovo" class="btn btn-primary">
                        <i class="bi bi-plus-circle"></i> Nova Sessão
                    </button>
                </header>

                <div class="row mb-4">
                    <div class="col-md-8">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Buscar sessão"
                                aria-label="Buscar sessão"
                            />
                            <button class="btn btn-primary" type="button">
                                <i class="bi bi-search"></i> Buscar
                            </button>
                        </div>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Filme</th>
                                <th scope="col">Sala</th>
                                <th scope="col">Data e Hora</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Formato</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="tabelaSessoes"></tbody>
                    </table>
                </div>

                <div
                    class="modal fade"
                    id="idModalSessao"
                    tabindex="-1"
                    aria-labelledby="idModalSessaoTitulo"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="idModalSessaoTitulo">
                                    Cadastrar Nova Sessão
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Fechar"
                                    id="btnFecharModal"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <form id="formSessao">
                                    <div class="mb-3">
                                        <label for="filme" class="form-label">Filme</label>
                                        <select class="form-select" id="filme" required>
                                            <option value="">Selecione um filme</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="sala" class="form-label">Sala</label>
                                        <select class="form-select" id="sala" required>
                                            <option value="">Selecione uma sala</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="dataHora" class="form-label">Data e Hora</label>
                                        <input
                                            type="datetime-local"
                                            class="form-control"
                                            id="dataHora"
                                            required
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="preco" class="form-label">Preço</label>
                                        <div class="input-group">
                                            <span class="input-group-text">R$</span>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="preco"
                                                min="0"
                                                step="0.01"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="idioma" class="form-label">Idioma</label>
                                        <select class="form-select" id="idioma" required>
                                            <option value="">Selecione o idioma</option>
                                            <option value="Dublado">Dublado</option>
                                            <option value="Legendado">Legendado</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="formato" class="form-label">Formato</label>
                                        <select class="form-select" id="formato" required>
                                            <option value="">Selecione o formato</option>
                                            <option value="2D">2D</option>
                                            <option value="3D">3D</option>
                                            <option value="IMAX">IMAX</option>
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
                                    id="btnSalvarSessao"
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal de Confirmação de Exclusão -->
                <div
                    class="modal fade"
                    id="modalExcluirSessao"
                    tabindex="-1"
                    aria-labelledby="modalExcluirSessaoLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalExcluirSessaoLabel">
                                    Confirmar Exclusão
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Fechar"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <h5>Deseja realmente excluir esta sessão?</h5>
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
                                    id="btnExcluirSessao"
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
