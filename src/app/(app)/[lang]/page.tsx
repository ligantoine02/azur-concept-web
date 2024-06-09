import { Hero } from "@/components/sections";
import { Categories, Values, Statistics, Why, HowStart } from "./_components";

export default function Page() {
	return (
		<main>
			<Hero
				heading="A long home heading page"
				subheading={{ label: "Check our services", link: "/services" }}
				image="/bg.jpg"
				description="Un tres longue petite description qui doit apparaitre sur tous les en-tetes. Je ne sais pas si ca va bien marcher. Mais il faut que ce soit le cas."
				cta={{ link: "/contact", label: "Let's talk" }}
			/>

			{/* Categories */}
			<Categories />

			{/* Our values */}
			<Values />

			{/* Statistics */}
			<Statistics />

			{/* Why work with us */}
			<Why />

			{/* How getting started */}
			<HowStart />
		</main>
	);
}
