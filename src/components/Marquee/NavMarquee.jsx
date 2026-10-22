import NavMarqueeClient from "./NavMarqueeClient"
const NavMarquee = async() => {

    let product = null

    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products`, {
            cache: "no-store"
        })
        if (res.ok) {
            product = await res.json()
        }
    } catch (err) {
        console.error('Failed to fetch product:', err)
    }
    return (
        <div>
            <NavMarqueeClient  product={product}></NavMarqueeClient>
        </div>
    );
}

export default  NavMarquee