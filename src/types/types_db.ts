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
          text: string | null
          thumbnail_u_r_l: string | null
          updated_at: string
          url: string | null
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
          width?: number | null
        }
        Relationships: []
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
          salt?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
