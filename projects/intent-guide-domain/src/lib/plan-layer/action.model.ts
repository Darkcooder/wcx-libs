import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityTimePeriodModel } from "../entity/entity-time-period.model";
import { IEntityModel } from "../entity/entity.model";
import { MetodicActionDomainModel } from "../metodic-layer/action.model";
import { PlanParameterDomainModel } from "./parameter.model";

export interface IPlanActionDomainModel {
  template: MetodicActionDomainModel,
  params: PlanParameterDomainModel[],
}

export type PlanActionDomainModel = IPlanActionDomainModel & IEntityModel & IEntityNamedModel & IEntityTimePeriodModel;
