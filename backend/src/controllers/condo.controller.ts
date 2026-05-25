import type { Request, Response } from 'express';
import { listCondos } from '../services/condo.service.js';

export async function getCondosController(
  _request: Request,
  response: Response,
) {
  try {
    const condos = await listCondos();
    response.status(200).json(condos);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error';

    response.status(502).json({
      message: 'Failed to load condominiums',
      detail: message,
    });
  }
}
