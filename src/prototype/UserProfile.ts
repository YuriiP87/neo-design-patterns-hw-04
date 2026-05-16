import { UserProfilePrototype } from "./UserProfilePrototype";

export type Department = "finance" | "engineering" | "marketing";

export type Permissions = {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
};

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: Permissions
  ) {}

  public clone(): UserProfilePrototype {
    return new UserProfile(this.username, this.department, {
      canEditUsers: this.permissions.canEditUsers,
      canApproveBudget: this.permissions.canApproveBudget,
      canAccessInternalTools: this.permissions.canAccessInternalTools,
    });
  }
}