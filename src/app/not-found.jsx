import Link from "next/link";

const Notfound = () => {
  return (
    <div>
        <h1>This is not the Page you are looking for</h1>
        <p>Sorry, the page you are looking for does not exist</p>
        <Link href="/">Blast me in tatooine</Link>
    </div>
  )
}

export default Notfound