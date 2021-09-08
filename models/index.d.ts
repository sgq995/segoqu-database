import {
  Sequelize,
  DataTypes,
  Model,
  Optional,
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
  HasMany,
  BelongsToMany,
  BelongsTo,
} from "sequelize";

// category.js
interface CategoryAttributes {
  id: number,
  label: string,
}

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

  public readonly posts?: Post[];

  public static associations: {
    Post: HasMany<Category, Post>,
  }
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

  public readonly props?: Prop[];

  public static associations: {
    Prop: BelongsToMany<Component, Prop>,
  }
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

  public readonly post?: Post;

  public getComponent!: BelongsToGetAssociationMixin<Component>;
  public setComponent!: BelongsToSetAssociationMixin<Component, string>;
  public createComponent!: BelongsToCreateAssociationMixin<Component>;

  public readonly component?: Component;

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

  public readonly contentProps?: ContentProp[];

  public static associations: {
    Post: BelongsTo<Content, Post>,
    Component: BelongsTo<Content, Component>,
    ContentProp: HasMany<Content, ContentProp>,
  }
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

  public readonly content?: Content;

  public getProp!: BelongsToGetAssociationMixin<Prop>;
  public setProp!: BelongsToSetAssociationMixin<Prop, number>;
  public createProp!: BelongsToCreateAssociationMixin<Prop>;

  public readonly prop?: Prop;

  public static associations: {
    Content: BelongsTo<ContentProp, Content>,
    Prop: BelongsTo<ContentProp, Content>,
  }
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

  public readonly category?: Category;

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

  public readonly tags?: Tag[];

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

  public readonly contents?: Content[];

  public static associations: {
    Category: BelongsTo<Post, Category>,
    Tag: BelongsToMany<Post, Tag>,
    Content: HasMany<Post, Content>,
  }
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

  public readonly components?: Component[];

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

  public readonly contentProps?: ContentProp[];

  public static associations: {
    Component: BelongsToMany<Prop, Component>,
    ContentProp: HasMany<Prop, ContentProp>,
  }
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
  public hasPosts!: BelongsToMaContentPropnyHasAssociationsMixin<Post, number>;
  public setPosts!: BelongsToManySetAssociationsMixin<Post, number>;
  public addPost!: BelongsToManyAddAssociationMixin<Post, number>;
  public addPosts!: BelongsToManyAddAssociationsMixin<Post, number>;
  public removePost!: BelongsToManyRemoveAssociationMixin<Post, number>;
  public removePosts!: BelongsToManyRemoveAssociationsMixin<Post, number>;
  public createPost!: BelongsToManyCreateAssociationMixin<Post>;

  public readonly posts?: Post[];

  public static associations: {
    Post: BelongsToMany<Tag, Post>,
  }
}
