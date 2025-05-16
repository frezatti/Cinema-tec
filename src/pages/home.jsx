import NavBar from "../components/navbar";
export default function Home() {
	return (
		<>
			<NavBar />
			<main className="container">
				<header className="my-4">
					<h2>Sessões Disponíveis</h2>
				</header>
				<div className="row g-4" id="listaFilmesSessoes" />
			</main>
		</>
	);
}
