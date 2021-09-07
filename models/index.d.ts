import { Sequelize, DataTypes, Model, Optional } from "sequelize";

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
}

// component.js
interface ComponentAttributes {
  tag: string,
}

export class Component
  extends Model<ComponentAttributes>
  implements ComponentAttributes { }

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

}

// prop.js
interface PropAttributes {
  name: string,
}

export class Prop
  extends Model<PropAttributes>
  implements PropAttributes {

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

}
