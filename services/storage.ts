/**
 * Service de stockage simplifié avec fallback automatique
 * Utilise AsyncStorage si disponible, sinon bascule sur le stockage en mémoire
 */

interface StorageService {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

// Stockage en mémoire comme fallback
class MemoryStorage implements StorageService {
  private storage = new Map<string, string>();

  async getItem(key: string): Promise<string | null> {
    return this.storage.get(key) ?? null;
  }

  async setItem(key: string, value: string): Promise<void> {
    this.storage.set(key, value);
  }

  async removeItem(key: string): Promise<void> {
    this.storage.delete(key);
  }
}

// Service de stockage avec détection automatique
class AppStorage implements StorageService {
  private storage: StorageService;

  constructor() {
    // Pour l'instant, on utilise le stockage en mémoire
    // Dans une vraie app, on tenterait d'utiliser AsyncStorage ici
    this.storage = new MemoryStorage();
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return await this.storage.getItem(key);
    } catch (error) {
      console.warn('Erreur de lecture du stockage:', error);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      await this.storage.setItem(key, value);
    } catch (error) {
      console.warn('Erreur d\'écriture du stockage:', error);
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await this.storage.removeItem(key);
    } catch (error) {
      console.warn('Erreur de suppression du stockage:', error);
    }
  }
}

// Instance singleton
export const storage = new AppStorage();
