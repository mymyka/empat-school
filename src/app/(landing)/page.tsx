import { Card } from "@/components/ui/card";
import { Comment } from "./components/comment";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  const comments = [
    {
      avatarUrl: "/assets/img/avatar-1.png",
      name: "Monkey D. Luffy",
      nickname: "@theFuturePirateKing",
      text: "I really like this app, it really helps to have fun and get smarter in my free time, although I install it to order food, though !",
    },
    {
      avatarUrl: "/assets/img/avatar-2.png",
      name: "Franky",
      nickname: "@theShipwright ",
      text: "This app is just SUUUUUPER ! ",
    },
    {
      avatarUrl: "/assets/img/avatar-3.png",
      name: "Roronoa Zoro",
      nickname: "@theSwordsman",
      text: "Something do happen, something that makes me smarter and in the same time gives me joy !",
    },
    {
      avatarUrl: "/assets/img/avatar-4.png",
      name: "Nami",
      nickname: "@theNavigator",
      text: "Now I switched from other couple of apps  and really cut my expenses over the time, but listen carefully ! this is my coupon...",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center px-8 gap-20">
        <section className="flex flex-col items-center">
          <h1 className=" text-center">
            Your language learning app is BORING !
            <span className=" block lg:mt-4">
              Check how
              <span className=" bg-yellow-300 ml-1 lg:ml-2">we gonna tech you out !</span>
            </span>
          </h1>
          <div className="pt-10 flex gap-5 lg:hidden">
            <Button intent="secondary" size="medium">
              Sign In
            </Button>
            <Button intent="primary" size="medium">
              Sign Up
            </Button>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <Card>
            <p>
              This your favorite: videos, films, articles, books, and evrithing else that you wnat
              to learn language from !
            </p>
          </Card>
          <Image
            src={"/assets/img/slide-1-mobile.png"}
            alt="logo"
            className=" md:block cursor-pointer pt-5"
            width={500}
            height={100}
            quality={100}
          />
          <Card>
            <h3>We find new vocabulary for you and</h3>
            <p>
              make collections, we put them with context in the boxes to save emotions from content
            </p>
          </Card>
        </section>
        <section className="flex flex-col items-center">
          <h2>We make games and lessons for you</h2>
          <div className="pt-5">
            <Card>
              <p>Anki cards, quizzes, competitive games against other users and more...</p>
            </Card>
          </div>
          <Image
            src={"/assets/img/slide-2.png"}
            alt="logo"
            className=" md:block cursor-pointer pt-5"
            width={500}
            height={100}
            quality={100}
          />
        </section>
        <section className="flex flex-col items-center">
          <h2>We are trusted world wide !</h2>
          <div className="flex flex-col gap-5 pt-8">
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2>Don’t waste time start right now !</h2>
          <div className="pt-5">
            <Card>
              <p>
                Sign in or try a demo, ti start right now, and then create an account with saved
                progress !
              </p>
            </Card>
          </div>
          <div className="pt-10 flex justify-center gap-5">
            <Button intent="secondary" size="medium">
              Try demo
            </Button>
            <Button intent="primary" size="medium">
              Sign Up
            </Button>
          </div>
          <Image
            src={"/assets/img/slide-3.png"}
            alt="logo"
            className=" md:block cursor-pointer pt-5"
            width={500}
            height={100}
            quality={100}
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
