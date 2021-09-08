import {
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
} from "sequelize";
import { Sequelize, DataTypes, Model, Optional } from "sequelize";

// category.js
interface CategoryAttributes {
  id: number,
  label: string,
}
fooInstance.hasBar()
fooInstance.hasBars()
fooInstance.setBars()
fooInstance.addBar()
fooInstance.addBars()
fooInstance.removeBar()
fooInstance.removeBars()
fooInstance.createBar()

interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> { }

export class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes {
  public id!: number;
  public label!: string;

  public getPosts!: HasManyGetAssociationsMixin<Post>;
  public countPosts!: HasManyCountAssociationsMixin;
  public hasPost!: HasManyHasAssociationMixin<Post, number>;
  public hasPosts!: HasManyHasAssociationsMixin<Post, number>;
  public setPosts!: HasManySetAssociationsMixin<Post, number>;
  public addPost!: HasManyAddAssociationMixin<Post, number>;
  public addPosts!: HasManyAddAssociationsMixin<Post, number>;
  public removePost!: HasManyRemoveAssociationMixin<Post, number>;
  public removePosts!: HasManyRemoveAssociationsMixin<Post, number>;
  public createPost!: HasManyCreateAssociationMixin<Post>;
}

// component.js
interface ComponentAttributes {
  tag: string,
}

export class Component
  extends Model<ComponentAttributes>
  implements ComponentAttributes {
  public tag!: string;

  public getProps!: BelongsToManyGetAssociationsMixin<Prop>;
  public countProps!: BelongsToManyCountAssociationsMixin;
  public hasProp!: BelongsToManyHasAssociationMixin<Prop, string>;
  public hasProps!: BelongsToManyHasAssociationsMixin<Prop, string>;
  public setProps!: BelongsToManySetAssociationsMixin<Prop, string>;
  public addProp!: BelongsToManyAddAssociationMixin<Prop, string>;
  public addProps!: BelongsToManyAddAssociationsMixin<Prop, string>;
  public removeProp!: BelongsToManyRemoveAssociationMixin<Prop, string>;
  public removeProps!: BelongsToManyRemoveAssociationsMixin<Prop, string>;
  public createProp!: BelongsToManyCreateAssociationMixin<Prop>;
}

// content.js
interface ContentAttributes {
  id: number,
  postId: number,
  componentTag: string | null,
  position: number,
}

interface ContentCreationAttributes extends Optional<ContentAttributes, "id"> { }

export class Content
  extends Model<ContentAttributes, ContentCreationAttributes>
  implements ContentAttributes {
  public id!: number;
  public postId!: number;
  public componentTag!: string | null;
  public position!: number;

  public getPost!: BelongsToGetAssociationMixin<Post>;
  public setPost!: BelongsToSetAssociationMixin<Post, number>;
  public createPost!: BelongsToCreateAssociationMixin<Post>;

  public getComponent!: BelongsToGetAssociationMixin<Component>;
  public setComponent!: BelongsToSetAssociationMixin<Component, string>;
  public createComponent!: BelongsToCreateAssociationMixin<Component>;

  public getContentProps!: HasManyGetAssociationsMixin<ContentProp>;
  public countContentProps!: HasManyCountAssociationsMixin;
  public hasContentProp!: HasManyHasAssociationMixin<ContentProp, number>;
  public hasContentProps!: HasManyHasAssociationsMixin<ContentProp, number>;
  public setContentProps!: HasManySetAssociationsMixin<ContentProp, number>;
  public addContentProp!: HasManyAddAssociationMixin<ContentProp, number>;
  public addContentProps!: HasManyAddAssociationsMixin<ContentProp, number>;
  public removeContentProp!: HasManyRemoveAssociationMixin<ContentProp, number>;
  public removeContentProps!: HasManyRemoveAssociationsMixin<ContentProp, number>;
  public createContentProp!: HasManyCreateAssociationMixin<ContentProp>;
}

// contentprop.js
interface ContentPropAttributes {
  id: number,
  contentId: number,
  propName: string | null,
  value: string,
}

interface ContentPropCreationAttributes extends Optional<ContentPropAttributes, "id"> { }

export class ContentProp
  extends Model<ContentPropAttributes, ContentPropCreationAttributes>
  implements ContentPropAttributes {
  public id!: number;
  public contentId!: number;
  public propName!: string | null;
  public value!: string;

  public getContent!: BelongsToGetAssociationMixin<Content>;
  public setContent!: BelongsToSetAssociationMixin<Content, number>;
  public createContent!: BelongsToCreateAssociationMixin<Content>;

  public getProp!: BelongsToGetAssociationMixin<Prop>;
  public setProp!: BelongsToSetAssociationMixin<Prop, number>;
  public createProp!: BelongsToCreateAssociationMixin<Prop>;
}

// post.js
interface PostAttributes {
  id: number,
  categoryId: number | null,
  title: string,
  date?: Date,
  summary: string,
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> { }

export class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes {
  public id!: number;
  public categoryId!: number | null;
  public title!: string;
  public date!: Date;
  public summary!: string;

  public getCategory!: BelongsToGetAssociationMixin<Category>;
  public setCategory!: BelongsToSetAssociationMixin<Category, number>;
  public createCategory!: BelongsToCreateAssociationMixin<Category>;

  public getTags!: BelongsToManyGetAssociationsMixin<Tag>;
  public countTags!: BelongsToManyCountAssociationsMixin;
  public hasTag!: BelongsToManyHasAssociationMixin<Tag, number>;
  public hasTags!: BelongsToManyHasAssociationsMixin<Tag, number>;
  public setTags!: BelongsToManySetAssociationsMixin<Tag, number>;
  public addTag!: BelongsToManyAddAssociationMixin<Tag, number>;
  public addTags!: BelongsToManyAddAssociationsMixin<Tag, number>;
  public removeTag!: BelongsToManyRemoveAssociationMixin<Tag, number>;
  public removeTags!: BelongsToManyRemoveAssociationsMixin<Tag, number>;
  public createTag!: BelongsToManyCreateAssociationMixin<Tag>;

  public getContents!: HasManyGetAssociationsMixin<Content>;
  public countContents!: HasManyCountAssociationsMixin;
  public hasContent!: HasManyHasAssociationMixin<Content, number>;
  public hasContents!: HasManyHasAssociationsMixin<Content, number>;
  public setContents!: HasManySetAssociationsMixin<Content, number>;
  public addContent!: HasManyAddAssociationMixin<Content, number>;
  public addContents!: HasManyAddAssociationsMixin<Content, number>;
  public removeContent!: HasManyRemoveAssociationMixin<Content, number>;
  public removeContents!: HasManyRemoveAssociationsMixin<Content, number>;
  public createContent!: HasManyCreateAssociationMixin<Content>;
}

// prop.js
interface PropAttributes {
  name: string,
}

export class Prop
  extends Model<PropAttributes>
  implements PropAttributes {
  public name!: string;

  public getComponents!: BelongsToManyGetAssociationsMixin<Component>;
  public countComponents!: BelongsToManyCountAssociationsMixin;
  public hasComponent!: BelongsToManyHasAssociationMixin<Component, string>;
  public hasComponents!: BelongsToManyHasAssociationsMixin<Component, string>;
  public setComponents!: BelongsToManySetAssociationsMixin<Component, string>;
  public addComponent!: BelongsToManyAddAssociationMixin<Component, string>;
  public addComponents!: BelongsToManyAddAssociationsMixin<Component, string>;
  public removeComponent!: BelongsToManyRemoveAssociationMixin<Component, string>;
  public removeComponents!: BelongsToManyRemoveAssociationsMixin<Component, string>;
  public createComponent!: BelongsToManyCreateAssociationMixin<Component>;

  public getContentProps!: HasManyGetAssociationsMixin<ContentProp>;
  public countContentProps!: HasManyCountAssociationsMixin;
  public hasContentProp!: HasManyHasAssociationMixin<ContentProp, string>;
  public hasContentProps!: HasManyHasAssociationsMixin<ContentProp, string>;
  public setContentProps!: HasManySetAssociationsMixin<ContentProp, string>;
  public addContentProp!: HasManyAddAssociationMixin<ContentProp, string>;
  public addContentProps!: HasManyAddAssociationsMixin<ContentProp, string>;
  public removeContentProp!: HasManyRemoveAssociationMixin<ContentProp, string>;
  public removeContentProps!: HasManyRemoveAssociationsMixin<ContentProp, string>;
  public createContentProp!: HasManyCreateAssociationMixin<ContentProp>;
}

// tag.js
interface TagAttributes {
  id: number,
  label: string,
}

interface TagCreationAttributes extends Optional<TagAttributes, "id"> { }

export class Tag
  extends Model<TagAttributes, TagCreationAttributes>
  implements TagAttributes {
  public id!: number;
  public label!: string;

  public getPosts!: BelongsToManyGetAssociationsMixin<Post>;
  public countPosts!: BelongsToManyCountAssociationsMixin;
  public hasPost!: BelongsToManyHasAssociationMixin<Post, number>;
  public hasPosts!: BelongsToManyHasAssociationsMixin<Post, number>;
  public setPosts!: BelongsToManySetAssociationsMixin<Post, number>;
  public addPost!: BelongsToManyAddAssociationMixin<Post, number>;
  public addPosts!: BelongsToManyAddAssociationsMixin<Post, number>;
  public removePost!: BelongsToManyRemoveAssociationMixin<Post, number>;
  public removePosts!: BelongsToManyRemoveAssociationsMixin<Post, number>;
  public createPost!: BelongsToManyCreateAssociationMixin<Post>;
}
