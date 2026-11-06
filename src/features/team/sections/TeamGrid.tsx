import { TeamCard } from "@/features/team/components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/team";
import { wowDelay } from "@/lib/animation";

export function TeamGrid() {
  return (
    <div className="page-team">
      <div className="container">
        <div className="row">
          {TEAM_MEMBERS.slice(0, 8).map((member, index) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamCard member={member} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
