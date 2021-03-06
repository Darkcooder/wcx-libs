import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityModel } from "../entity/entity.model";
import { MetodicParameterDomainModel } from "../metodic-layer/parameter.model";

export interface IPlanParameterDomainModel {
  template: MetodicParameterDomainModel,
  planValue: number
}

export type PlanParameterDomainModel = IPlanParameterDomainModel & IEntityModel & IEntityNamedModel;
