import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityModel } from "../entity/entity.model";
import { MetodicParameterDomainModel } from "./parameter.model";

export interface IMetodicActionDomainModel {
  params: MetodicParameterDomainModel[];
}

export type MetodicActionDomainModel = IMetodicActionDomainModel & IEntityModel & IEntityNamedModel;
