export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      media: {
        Row: {
          created_at: string
          filename: string | null
          filesize: number | null
          focal_x: number | null
          focal_y: number | null
          height: number | null
          id: number
          mime_type: string | null
          prefix: string | null
          sizes_card_filename: string | null
          sizes_card_filesize: number | null
          sizes_card_height: number | null
          sizes_card_mime_type: string | null
          sizes_card_url: string | null
          sizes_card_width: number | null
          sizes_tablet_filename: string | null
          sizes_tablet_filesize: number | null
          sizes_tablet_height: number | null
          sizes_tablet_mime_type: string | null
          sizes_tablet_url: string | null
          sizes_tablet_width: number | null
          sizes_thumbnail_filename: string | null
          sizes_thumbnail_filesize: number | null
          sizes_thumbnail_height: number | null
          sizes_thumbnail_mime_type: string | null
          sizes_thumbnail_url: string | null
          sizes_thumbnail_width: number | null
          text: string | null
          thumbnail_u_r_l: string | null
          updated_at: string
          url: string | null
          user_id: number | null
          width: number | null
        }
        Insert: {
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          prefix?: string | null
          sizes_card_filename?: string | null
          sizes_card_filesize?: number | null
          sizes_card_height?: number | null
          sizes_card_mime_type?: string | null
          sizes_card_url?: string | null
          sizes_card_width?: number | null
          sizes_tablet_filename?: string | null
          sizes_tablet_filesize?: number | null
          sizes_tablet_height?: number | null
          sizes_tablet_mime_type?: string | null
          sizes_tablet_url?: string | null
          sizes_tablet_width?: number | null
          sizes_thumbnail_filename?: string | null
          sizes_thumbnail_filesize?: number | null
          sizes_thumbnail_height?: number | null
          sizes_thumbnail_mime_type?: string | null
          sizes_thumbnail_url?: string | null
          sizes_thumbnail_width?: number | null
          text?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          user_id?: number | null
          width?: number | null
        }
        Update: {
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          prefix?: string | null
          sizes_card_filename?: string | null
          sizes_card_filesize?: number | null
          sizes_card_height?: number | null
          sizes_card_mime_type?: string | null
          sizes_card_url?: string | null
          sizes_card_width?: number | null
          sizes_tablet_filename?: string | null
          sizes_tablet_filesize?: number | null
          sizes_tablet_height?: number | null
          sizes_tablet_mime_type?: string | null
          sizes_tablet_url?: string | null
          sizes_tablet_width?: number | null
          sizes_thumbnail_filename?: string | null
          sizes_thumbnail_filesize?: number | null
          sizes_thumbnail_height?: number | null
          sizes_thumbnail_mime_type?: string | null
          sizes_thumbnail_url?: string | null
          sizes_thumbnail_width?: number | null
          text?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          user_id?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "media_user_id_users_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          _ispaid: boolean
          created_at: string
          id: number
          updated_at: string
          user_id: number
        }
        Insert: {
          _ispaid: boolean
          created_at?: string
          id?: number
          updated_at?: string
          user_id: number
        }
        Update: {
          _ispaid?: boolean
          created_at?: string
          id?: number
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_users_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          products_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          products_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_rels_products_fk"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          content: Json | null
          created_at: string
          id: number
          title: string | null
          updated_at: string
        }
        Insert: {
          content?: Json | null
          created_at?: string
          id?: number
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: Json | null
          created_at?: string
          id?: number
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payload_migrations: {
        Row: {
          batch: number | null
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payload_preferences: {
        Row: {
          created_at: string
          id: number
          key: string | null
          updated_at: string
          value: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Relationships: []
      }
      payload_preferences_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          users_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          users_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payload_preferences_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "payload_preferences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_preferences_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      product_files: {
        Row: {
          created_at: string
          filename: string | null
          filesize: number | null
          focal_x: number | null
          focal_y: number | null
          height: number | null
          id: number
          mime_type: string | null
          prefix: string | null
          text: string | null
          thumbnail_u_r_l: string | null
          updated_at: string
          url: string | null
          user_id: number | null
          width: number | null
        }
        Insert: {
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          prefix?: string | null
          text?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          user_id?: number | null
          width?: number | null
        }
        Update: {
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          prefix?: string | null
          text?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          user_id?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_files_user_id_users_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          approvedForSale:
            | Database["public"]["Enums"]["enum_products_approved_for_sale"]
            | null
          category: Database["public"]["Enums"]["enum_products_category"]
          created_at: string
          description: string | null
          id: number
          name: string
          price: number
          price_id: string | null
          product_files_id: number
          stripe_id: string | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          approvedForSale?:
            | Database["public"]["Enums"]["enum_products_approved_for_sale"]
            | null
          category: Database["public"]["Enums"]["enum_products_category"]
          created_at?: string
          description?: string | null
          id?: number
          name: string
          price: number
          price_id?: string | null
          product_files_id: number
          stripe_id?: string | null
          updated_at?: string
          user_id?: number | null
        }
        Update: {
          approvedForSale?:
            | Database["public"]["Enums"]["enum_products_approved_for_sale"]
            | null
          category?: Database["public"]["Enums"]["enum_products_category"]
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          price?: number
          price_id?: string | null
          product_files_id?: number
          stripe_id?: string | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_product_files_id_product_files_id_fk"
            columns: ["product_files_id"]
            isOneToOne: false
            referencedRelation: "product_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_user_id_users_id_fk"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products_images: {
        Row: {
          _order: number
          _parent_id: number
          id: string
          image_id: number
        }
        Insert: {
          _order: number
          _parent_id: number
          id: string
          image_id: number
        }
        Update: {
          _order?: number
          _parent_id?: number
          id?: string
          image_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_images_image_id_media_id_fk"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_images_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          hash: string | null
          id: number
          lock_until: string | null
          login_attempts: number | null
          reset_password_expiration: string | null
          reset_password_token: string | null
          role: Database["public"]["Enums"]["enum_users_role"]
          salt: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          hash?: string | null
          id?: number
          lock_until?: string | null
          login_attempts?: number | null
          reset_password_expiration?: string | null
          reset_password_token?: string | null
          role: Database["public"]["Enums"]["enum_users_role"]
          salt?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          hash?: string | null
          id?: number
          lock_until?: string | null
          login_attempts?: number | null
          reset_password_expiration?: string | null
          reset_password_token?: string | null
          role?: Database["public"]["Enums"]["enum_users_role"]
          salt?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      users_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          product_files_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          product_files_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          product_files_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_rels_product_files_fk"
            columns: ["product_files_id"]
            isOneToOne: false
            referencedRelation: "product_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_rels_products_fk"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enum_products_approved_for_sale: "pending" | "approved" | "denied"
      enum_products_category: "ui_kits" | "icons"
      enum_users_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
