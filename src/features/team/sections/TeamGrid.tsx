import { TeamCard } from "@/features/team/components/TeamCard";
import { getTeamMembers } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function TeamGrid() {
  const team = await getTeamMembers();
  return (
    <div className="page-team">
      <div className="container">
        <div className="row">
          {team.map((member, index) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamCard member={member} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
