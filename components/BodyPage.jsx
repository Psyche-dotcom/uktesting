import SmoothScrollLink from "./SmoothScrollLink";
import Image from "next/image";

export default function BodyPage() {
  return (
    <div>
      <section className="mb-10 text-center">
        <h3 className="font-semibold mb-10 text-black text-4xl">
          One-on-one live video chat with random people
        </h3>
        <h5 className="text-xl">
          On LuckyCrush, men are connected to random women and women are
          connected to random men!
        </h5>
      </section>
      <section className="lg:flex items-center mb-10 gap-6 mx-20">
        <div className="w-full">
          <Image
            src="/asset/image-1.png"
            height={400}
            width={600}
            className="w-full"
            alt="An image of users video-chatting"
          />
        </div>
        <div className="w-full">
          <h3 className="font-semibold mb-10 text-black text-4xl">
            Random 1-on-1 video chat
          </h3>
          <h5>
            Start a private video chat with a random person in just 10 seconds.
            LuckyCrush randomly connects men with women and women with men. If
            you don&apos;t like your match, just click &ldquo;Next&rdquo; to be
            connected with a new stranger in a second. Meeting new friends from
            all over the world has never been easier.
          </h5>
        </div>
      </section>
      <section className="lg:flex items-center mb-10 gap-6 mx-20">
        <div className="w-full">
          <h3 className="font-semibold mb-10 text-black text-4xl">
            Instant translation
          </h3>
          <h5>
            When connecting with random people from all over the world, you
            might not always speak the same language as your partner. No
            problem! Our instant translation system automatically translates
            incoming messages into your language and outgoing messages into your
            partner&apos;s language. You won&apos;t even realize that your
            partner is on the other side of the world.
          </h5>
        </div>
        <div className="w-full">
          <Image
            src="/asset/image-2.png"
            height={400}
            width={600}
            className="w-full"
            alt="A chat image"
          />
        </div>
      </section>
      <section className="lg:flex items-center mb-10 gap-6 mx-20">
        <div className="w-full">
          <Image
            src="/asset/image-3.png"
            height={400}
            width={600}
            className="w-full"
            alt="A match-making image"
          />
        </div>
        <div className="w-full">
          <h3 className="font-semibold mb-10 text-black text-4xl">
            Men are only matched with women
          </h3>
          <h5>
            As a man, you have probably already experienced random chat sites
            where your matches are 90% guys. On LuckyCrush, men only connect
            with women, and women only with men.
          </h5>
        </div>
      </section>
      <section className="landing-bgimage py-[6.25rem] text-center mb-10">
        <h1 className="font-extrabold text-3xl text-white">
          <span className="text-5xl">1 million</span> members from{" "}
          <span className="text-5xl">100+</span> countries
        </h1>
      </section>
      <section className="text-center mb-10">
        <h1 className="mb-10 text-4xl text-pink font-semibold">
          Want to give it a try?
        </h1>
        <h6 className="mb-10">
          Select your gender, click &ldquo;start searching&rdquo;... That&apos;s
          it! You&apos;re in a private live
          <br /> video chat with a random person.{" "}
          <span className="font-bold">No signup needed</span>.
        </h6>
        <div className="rounded-md bg-pink text-white font-extrabold py-4 px-10 m-auto w-1/4">
          <SmoothScrollLink to="element1">Try Now</SmoothScrollLink>
        </div>
      </section>
    </div>
  );
}
