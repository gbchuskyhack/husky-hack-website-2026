import calendar from "../../assets/calendar.png";
import Image from "next/image";

export default function ScheduleSection() {
    return (
        <section className="py-40">
            <div className="flex justify-center">
                <h1 className="text-4xl text-start font-serif">
                    <span className="font-serif text-lg">
                        Detail
                        <br />
                    </span>
                    Coming Soon!
                </h1>

                <Image src={calendar} alt="Calendar" width={100} height={100} />
            </div>
        </section>
    );
}
